import { auth } from "../_lib/auth";

export const metadata = {
  title: "Guest area",
};

export default async function Page() {
  const session = await auth();
  //console.log(session);

  // ovo ovde je samo ako zelimo da nam ide samo ime npr"Natasa", a ne puno ime i prezime kao sto je sada, i onda dole samo ucitamo {firstName} umesto onoga sto sada ima
  //const firstName = session.user.name.split(" ").at(0);
  return (
    <h2 className="font-semibold text-2xl text-accent-400 mb-7">
      Welcome, {session.user.name}
    </h2>
  );
}
