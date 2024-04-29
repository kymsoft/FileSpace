import Image from "next/image";

export default function Security() {
  return (
    <div className="mx-10">
      <h1 className="text-xl font-bold my-5">Clerk Security</h1>
      <p>
        Clerk, as a third-party authentication tool, plays a
        pivotal role in securing user access to Syncspace. It manages user
        authentication, ensuring that only authorized individuals can interact
        with the platform. Clerk securely stores user data, including details
        like usernames, email addresses, and hashed passwords. Additionally, it
        supports role-based access control (RBAC), allowing you to define roles
        (such as "Admin" or "Member") and their corresponding permissions. By
        integrating Clerk's robust authentication flow, Syncspace enhances
        security and provides a seamless user experience. If you have any
        specific questions about Clerk's implementation, feel free to ask! 😊
      </p>
      <div className="flex w-full justify-center items-center my-5">
        <Image src="/assets/manage profile.png" alt="" height={400} width={400} />
      </div>
    </div>
  );
}
