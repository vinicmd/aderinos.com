import { CONSTANTS } from "@/util/constants";
import { Resend } from "resend";

const resendApiKey = process.env.RESEND_API_KEY || "";

const resend = new Resend(resendApiKey);

interface Client {
  name?: string | undefined | null;
  telephone: string;
}

export const SendEmail = async ({ name = "", telephone }: Client) => {
  const { data, error } = await resend.emails.send({
    from: "NOS Pacotes <contato@nospacotes.com>",
    to: [CONSTANTS.email],
    subject: "Novo Cliente",
    html: `${
      name && `<strong>Nome: </strong>${name} <br />`
    }<strong>Telefone: </strong> ${telephone}`,
  });

  if (error) {
    return console.error({ error });
  }
};
