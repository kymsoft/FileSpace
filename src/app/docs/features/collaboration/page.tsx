import Image from "next/image";
import Link from "next/link";

export default function Collaboration() {
  return (
    <div className="mx-10">
      <h1 className="text-xl font-bold my-5">Collaboration at its best</h1>
      <p>
        Collaboration in Syncspace is redefined with a suite of features and
        tools designed to facilitate seamless teamwork, foster creativity, and
        drive productivity. At the core of Syncspace collaboration
        capabilities is its intuitive and user-friendly interface, which
        empowers users to collaborate effortlessly in real-time from anywhere in
        the world. One of the key features that sets Syncspace apart is its
        customizable workspaces, known as organizations. Within these
        organizations, users can create dedicated spaces for each project, team,
        or department, providing a centralized hub for collaboration. Members of
        an organization can collaborate on documents, share ideas, and track
        progress in a collaborative environment that promotes transparency and
        accountability. Syncspace offers a range of collaboration tools to suit
        different workflows and preferences. Users can co-author documents
        simultaneously, leave comments and feedback, and track changes to ensure
        everyone stays on the same page. With integrated communication tools
        such as chat and video conferencing, teams can communicate seamlessly
        without switching between multiple applications, fostering a culture of
        open communication and collaboration.
      </p>
      <div className="flex w-full justify-center items-center my-5">
        <Image src="/assets/collab.jpeg" alt="" height={400} width={400} />
      </div>
      <div className="absolute right-5">
        <Link href="../features/security" className="cursor-pointer p-2 bg-secondary rounded-md" >
          Next ➡️
        </Link>
      </div>
    </div>
  );
}
