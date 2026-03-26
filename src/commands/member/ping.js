/**
 
 *

 */
import { PREFIX } from "../../config.js";

export default {
  name: "ping",
  description:
    "Verificar se o bot está online, o tempo de resposta e o tempo de atividade.",
  commands: ["ping", "pong"],
  usage: `${PREFIX}ping`,
  /**
   * @param {CommandHandleProps} props
   */
  handle: async ({ sendReply, sendReact, startProcess, fullMessage }) => {
    const response = fullMessage.slice(1).startsWith("ping")
      ? "🏓 Pong!"
      : "🏓 Ping!";

    await sendReact("🏓");

    
  },
};
