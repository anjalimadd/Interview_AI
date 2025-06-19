import { getCurrentUser } from "@/lib/actions/auth.action";
import { HeroClient } from "./HeroClient";

export const Hero = async () => {
  const user = await getCurrentUser();

  return <HeroClient user={user} />;
};
