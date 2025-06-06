import { IMessage, IPostMessageSent } from '@rocket.chat/apps-engine/definition/messages';
import { IRead, IModify, IHttp, IPersistence } from '@rocket.chat/apps-engine/definition/accessors';
import { App } from '@rocket.chat/apps-engine/definition/App';
import { IAppInfo } from '@rocket.chat/apps-engine/definition/metadata';
import { faqList } from './faq';
import { getBestMatch } from './similarity';

export class FaqDetectionApp extends App {
  constructor(info: IAppInfo, logger) {
    super(info, logger);
  }

  async executePostMessageSent(context: IPostMessageSent, read: IRead, http: IHttp, persistence: IPersistence, modify: IModify): Promise<void> {
    const message: IMessage = context.message;

    if (!message.text || !message.sender || message.sender.username === 'faqbot') {
      return;
    }

    const question = message.text.trim();
    const bestMatch = getBestMatch(question, faqList);

    if (bestMatch && bestMatch.score > 0.8) {
      const user = message.sender;
      const dmRoom = await read.getRoomReader().getDirectByUsernames([user.username, 'faqbot']);
      if (!dmRoom) return;

      const msgBuilder = modify.getCreator().startMessage()
        .setRoom(dmRoom)
        .setSender(message.sender)
        .setText(`🤖 I found a similar question in our FAQ:
*Q:* ${bestMatch.item.question}
*A:* ${bestMatch.item.answer}`);

      await modify.getCreator().finish(msgBuilder);
    }
  }
}
