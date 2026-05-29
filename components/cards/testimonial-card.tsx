import Image from "next/image";

type TestimonialCardProps = {
  name: string;
  role: string;
  country: string;
  flag: string;
  image: string;
  quote: string;
};

export function TestimonialCard({ name, role, country, flag, image, quote }: TestimonialCardProps) {
  return (
    <article className="rounded-[8px] border border-slate-200 bg-white p-7 luxury-shadow transition duration-300 hover:-translate-y-1 hover:border-[#1E40FF]/25">
      <div className="mb-6 flex items-center gap-4">
        <div className="relative h-14 w-14 overflow-hidden rounded-full bg-slate-100">
          <Image src={image} alt={`${name} profile photo`} fill sizes="56px" className="object-cover" />
        </div>
        <div>
          <h3 className="font-semibold text-slate-950">{name}</h3>
          <p className="text-sm text-slate-500">{role} · {country}</p>
        </div>
      </div>
      <div className="mb-5 inline-flex rounded-full border border-slate-200 bg-[#F8FAFC] px-3 py-1 text-xs font-semibold text-slate-600">
        {flag} LinkedIn-style verified story
      </div>
      <p className="text-sm leading-7 text-slate-700">"{quote}"</p>
    </article>
  );
}
