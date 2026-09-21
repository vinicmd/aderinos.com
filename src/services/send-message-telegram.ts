import { Plan } from "@/util/protocols/plan";
import { telegramURIFormater } from "@/util/telegramURIFormater";

interface TelegranData {
  name: string;
  telephone: string;
  plan?: Plan;
  postal?: string;
}
export async function SendTelegramMessage({
  name,
  telephone,
  plan,
  postal,
}: TelegranData) {
  await fetch("/api/telegram", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
    },
    body: JSON.stringify({ name, telephone, plan, postal }),
  }).then((response) => {
    if (response.status === 404) {
      fetch(
        telegramURIFormater({
          name,
          telephone,
          error: true,
        }),
      );
    }
  });
}
