export const telegramURIFormater = ({
  name,
  telephone,
  error,
}: {
  name: string;
  telephone: string;
  error?: boolean;
}): string => {
  const chatID = process.env.CHAT_ID;
  const telegramToken = process.env.TELEGRAM_BOT_TOKEN;

  if (error) {
    return `https://api.telegram.org/bot${telegramToken}/sendMessage?chat_id=1109659914&text=Erro&parse_mode=html`;
  }

  const message = encodeURIComponent(
    `<b>Novo Cliente</b>\n\n<b>Nome:</b> ${name}\n<b>Telemóvel:</b> ${telephone}`,
  );
  const uri = `https://api.telegram.org/bot${telegramToken}/sendMessage?chat_id=${chatID}&text=${message}&parse_mode=html`;

  return uri;
};
