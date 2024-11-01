import { getCountries } from "@/app/_lib/data-service";

interface Props {
  defaultCountry?: string | null;
  name: string;
  id: string;
  className: string;
}
interface Country {
  name: string;
  flag: string;
  independent: boolean;
}

async function SelectCountry({ defaultCountry, name, id, className }: Props) {
  const countries: Country[] = await getCountries();
  const flag =
    countries.find((country) => country.name === defaultCountry)?.flag ?? "";

  return (
    <select
      name={name}
      id={id}
      defaultValue={`${defaultCountry}%${flag}`}
      className={className}
    >
      <option value="">Select country...</option>
      {countries.map((c) => (
        <option key={c.name} value={`${c.name}%${c.flag}`}>
          {c.name}
        </option>
      ))}
    </select>
  );
}

export default SelectCountry;
