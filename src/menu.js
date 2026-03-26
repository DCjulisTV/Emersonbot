/**
 * Menu do bot
 *
 */
import pkg from "../package.json" with { type: "json" };
import { BOT_NAME } from "./config.js";
import { getPrefix } from "./utils/database.js";
import { readMore } from "./utils/index.js";

export function menuMessage(groupJid) {
  const date = new Date();

  const prefix = getPrefix(groupJid);

  return `╭━━⪩ BEM VINDO! ⪨━━${readMore()}
▢
▢ • ${BOT_NAME}
▢ • Data: ${date.toLocaleDateString("pt-br")}
▢ • Hora: ${date.toLocaleTimeString("pt-br")}
▢ • Prefixo: ${prefix}
▢ • Versão: ${pkg.version}
▢
╰━━─「🪐」─━━

╭━━⪩ DONO ⪨━━
▢
▢ • ${prefix}exec
▢ • ${prefix}get-group-id
▢ • ${prefix}off
▢ • ${prefix}on
▢ • ${prefix}set-menu-image
▢
╰━━─「🌌」─━━

╭━━⪩ ADMINS ⪨━━
▢
▢ • ${prefix}abrir
▢ • ${prefix}add-auto-responder
▢ • ${prefix}agendar-mensagem
▢ • ${prefix}anti-audio (1/0)
▢ • ${prefix}anti-document (1/0)
▢ • ${prefix}anti-event (1/0)
▢ • ${prefix}anti-image (1/0)
▢ • ${prefix}anti-link (1/0)
▢ • ${prefix}anti-product (1/0)
▢ • ${prefix}anti-sticker (1/0)
▢ • ${prefix}anti-video (1/0)
▢ • ${prefix}auto-responder (1/0)
▢ • ${prefix}auto-sticker (1/0)
▢ • ${prefix}ban
▢ • ${prefix}delete
▢ • ${prefix}exit (1/0)
▢ • ${prefix}fechar
▢ • ${prefix}hidetag
▢ • ${prefix}limpar
▢ • ${prefix}mute
▢ • ${prefix}only-admin (1/0)
▢ • ${prefix}promover
▢ • ${prefix}rebaixar
▢ • ${prefix}revelar
▢ • ${prefix}unmute
▢ • ${prefix}welcome (1/0)
▢
╰━━─「⭐」─━━

╭━━⪩ PRINCIPAL ⪨━━
▢
▢ • ${prefix}attp
▢ • ${prefix}brat
▢ • ${prefix}cep
▢ • ${prefix}gerar-link
▢ • ${prefix}info
▢ • ${prefix}meu-lid
▢ • ${prefix}perfil
▢ • ${prefix}ping
▢ • ${prefix}raw-message
▢ • ${prefix}rename
▢ • ${prefix}sticker
▢ • ${prefix}suporte
▢ • ${prefix}to-gif
▢ • ${prefix}to-image
▢ • ${prefix}to-mp3
▢ • ${prefix}ttp
▢ • ${prefix}yt-search
▢
╰━━─「🚀」─━━

╭━━⪩ DOWNLOADS ⪨━━
▢
▢ • ${prefix}facebook
▢ • ${prefix}instagram
▢ • ${prefix}play-audio
▢ • ${prefix}play-video
▢ • ${prefix}pinterest
▢ • ${prefix}tik-tok
▢ • ${prefix}yt-mp3
▢ • ${prefix}yt-mp4
▢
╰━━─「🎶」─━━

╭━━⪩ BRINCADEIRAS ⪨━━
▢
▢ • ${prefix}abracar
▢ • ${prefix}beijar
▢ • ${prefix}dado
▢ • ${prefix}jantar
▢ • ${prefix}lutar
▢ • ${prefix}matar
▢ • ${prefix}socar
▢
╰━━─「🎡」─━━

╭━━⪩ IA ⪨━━
▢
▢ • ${prefix}gemini
▢ • ${prefix}gpt-5
▢ • ${prefix}ia-sticker
▢
╰━━─「🚀」─━━

╭━━⪩ CANVAS ⪨━━
▢
▢ • ${prefix}blur
▢ • ${prefix}cadeia
▢ • ${prefix}contraste
▢ • ${prefix}espelhar
▢ • ${prefix}gray
▢ • ${prefix}inverter
▢ • ${prefix}pixel
▢ • ${prefix}rip
▢
╰━━─「❇」─━━`;
}
