import style from "@/components/offers/offers.module.css";
import { PackageCard } from "@/components/packageCard/packageCard";
import { offersPlans } from "@/components/offers/data";

export function Offers() {
  return (
    <main className={style.offers}>
      <div className={style.title}>
        <h2>Pacotes NOS</h2>
        <h1>Fibra</h1>
      </div>
      <section className={style.packages}>
        {offersPlans.map((offer) => {
          return <PackageCard key={offer.name} {...offer} />;
        })}
      </section>
    </main>
  );
}
