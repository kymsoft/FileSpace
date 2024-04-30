import Image from "next/image";

export default function Introduction() {
  return (
    <div className="md:w-[800px] w-[600px] ml-10">
      <div className="mb-10">
        <h3 className="mb-5  scroll-m-20 text-2xl font-semibold tracking-tight">
          INTRODUCTION
        </h3>
        <p className="text-lg">
          Syncspace is not just another collaboration platform; it is a dynamic
          ecosystem designed to revolutionize the way teams work together. With
          Syncspace, you will experience the power of effortless collaboration,
          intuitive document management, and customizable workspaces—all in one
          innovative platform.
        </p>
      </div>
      <div className="mb-10">
        <h3 className="mb-5  scroll-m-20 text-2xl font-semibold tracking-tight">
          User Authentication
        </h3>
        <p className="text-lg">
          User authentication with Clerk on Syncspace ensures a secure and
          streamlined experience for all users, providing robust protection for
          sensitive user and organization details. Clerk, as a trusted
          third-party authentication tool, plays a pivotal role in verifying
          user identities and managing access to Syncspace collaborative
          platform. Clerk employs industry-leading encryption protocols and
          security measures to safeguard user authentication processes,
          protecting against unauthorized access and data breaches. With Clerks
          multi-factor authentication capabilities and OAuth integration, users
          can verify their identities seamlessly across various devices and
          platforms, enhancing security without sacrificing user experience.
        </p>
        <div className=" my-3 flex w-full justify-center items-center">
          <Image src="/assets/auth.png" alt="Auth" height={400} width={400} />
        </div>
      </div>
      <div className="mb-10">
        <h3 className="mb-5  scroll-m-20 text-2xl font-semibold tracking-tight">
          Customization
        </h3>
        <p className="text-lg">
          At the workspace level, users can personalize their environment by
          arranging documents, folders, and collaboration tools to suit their
          needs. Customizable layouts enable users to optimize screen real
          estate, ensuring that essential information is easily accessible.
          Additionally, Syncspace offers a range of themes and color schemes,
          allowing users to create a workspace that reflects their brand
          identity or personal style.
        </p>
        <div className=" my-3 flex w-full justify-center items-center">
          <Image src="/assets/worker.png" alt="Auth" height={600} width={600} />
        </div>
      </div>
    </div>
  );
}
