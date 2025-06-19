import Agent from "@/components/Agent";
import { getCurrentUser } from "@/lib/actions/auth.action";
import GenerationForm from "@/components/GenerationForm";


const Page = async () => {
  const user = await getCurrentUser();
  console.log(user)

  return (
    <>
      <h3>Interview generation</h3>

      {/* <Agent
        userName={user?.name!}
        userId={user?.id}
        profileImage={user?.profileURL}
        type="generate"
      /> */}
      <GenerationForm
        userName={user?.name!}
        userId={user?.id}
        profileImage={user?.profileURL}
      />
    </>
  );
};

export default Page;