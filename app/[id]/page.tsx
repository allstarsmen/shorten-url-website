import { notFound } from "next/navigation";
import { getURL } from "../actions";
import RedirectUrl from "./redirectUrl";

export default async function Page({ params }: { params: { id: string } }) {
  const { id } = params;
  const result = await getURL(id);

  if (!result.success) notFound();

  return <RedirectUrl url={result.originUrl} />;
}
