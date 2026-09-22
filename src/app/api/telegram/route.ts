import { CONSTANTS } from "@/util/constants";
import { Plan } from "@/util/protocols/plan";
import { NextResponse } from "next/server";

const now = new Date();

const day = String(now.getDate()).padStart(2, "0");
const month = String(now.getMonth() + 1).padStart(2, "0");
const year = now.getFullYear();

const hours = String(now.getHours()).padStart(2, "0");
const minutes = String(now.getMinutes()).padStart(2, "0");
const seconds = String(now.getSeconds()).padStart(2, "0");

const formattedDate = `${day}/${month}/${year} ${hours}:${minutes}:${seconds}`;

const url = CONSTANTS.url;
export async function POST(request: Request) {
  try {
    const body = await request.json();
    const {
      name,
      telephone,
      plan,
      postal,
    }: { name: string; telephone: string; plan: Plan; postal: string } = body;

    const telegramToken = process.env.TELEGRAM_BOT_TOKEN;
    const chatId = process.env.CHAT_ID;

    if (!telegramToken || !chatId) {
      console.error("Faltam credenciais do Telegram no .env.local");
      return NextResponse.json(
        { error: "Erro de configuração no servidor" },
        { status: 500 },
      );
    }
    const rawNumber = Number(plan.price);
    const price = new Intl.NumberFormat("pt-PT", {
      style: "currency",
      currency: "EUR",
    }).format(rawNumber);

    const message = postal
      ? `<b>Novo Cliente</b>\n\n<b>Cliente:</b> ${name}\n<b>Telemóvel:</b> ${telephone}\n${postal && "<b>Código Postal:</b>"}\n<b>Data/Hora:</b> ${formattedDate}\n<b>Origem:</b> ${url}`
      : `<b>Novo Cliente</b>\n\n<b>Cliente:</b> ${name}\n<b>Telemóvel:</b> ${telephone}\n<b>Pacote:</b> ${plan.name}\n<b>Oferta:</b> ${plan.feature}\n<b>Valor:</b> ${price}\n<b>Data/Hora:</b> ${formattedDate}\n<b>Origem:</b> ${url}`;

    const telegramResponse = await fetch(
      `https://api.telegram.org/bot${telegramToken}/sendMessage`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          chat_id: chatId,
          text: message,
          parse_mode: "HTML",
        }),
      },
    );

    if (!telegramResponse.ok) {
      throw new Error(
        `Falha na comunicação com o Telegram: ERRO ${telegramResponse.status}: ${telegramResponse.statusText}`,
      );
    }

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Erro ao enviar mensagem:", error);
    return NextResponse.json(
      { error: "Erro interno ao processar pedido" },
      { status: 500 },
    );
  }
}
