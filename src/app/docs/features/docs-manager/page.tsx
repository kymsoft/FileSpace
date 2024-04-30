import Image from "next/image";
import Link from "next/link";

export default function DocsManager() {
  
  return (
    <div className="mx-10">
      <h1 className="text-xl font-bold my-5">File Manager 📁</h1>
      <div>
        <p>
          File management is a critical aspect of our collaborative platforms,
          ensuring efficient organization, access, and sharing of documents. It
          encompasses functionalities such as real-time collaboration, version
          control, granular access permissions, security measures, and seamless
          integration with other tools. A well-designed file manager enhances
          productivity, streamlines workflows, and promotes effective teamwork
          within the platform. 📁
        </p>
      </div>

      <div className="mt-10">
        <div>
          <h2 className="font-bold mb-2">1. Searching Files on Workspace: </h2>
          File Manager provides users with the ability to search for documents
          within the workspace using keywords, file names, or tags. The search
          functionality is intuitive and fast, allowing users to quickly locate
          the files they need.
          <div className="flex w-full justify-center items-center my-3">
            <Image src="/assets/search.png" alt="" height={200} width={200} />
          </div>
        </div>
        <div>
          <h2 className="font-bold mb-2">2. Uploading File: </h2>Users can
          easily upload files to the platform using a simple drag-and-drop
          interface or by selecting files from their device. Options for bulk
          uploads are also available for users who need to upload multiple files
          at once.
          <div className="flex w-full justify-center items-center my-3">
            <Image src="/assets/upload.png" alt="" height={400} width={400} />
          </div>
        </div>
        <div>
          <h2 className="font-bold mb-2">3. Accessing Files: </h2>Once uploaded,
          users can access their files easily. Files are organized into folders
          or categories for better navigation. Access control mechanisms ensure
          that only authorized users can view or edit certain files.
          <div className="flex w-full justify-center items-center my-3">
            <Image src="/assets/upload.png" alt="" height={400} width={400} />
          </div>
        </div>
        <div className="mt-5">
          <h2 className="font-bold mb-2 text-lg">4. File Manipulators</h2>
          <div className="flex w-full justify-center items-center my-3">
            <Image src="/assets/options.png" alt="" height={200} width={200} />
          </div>
        </div>
        <div>
          <span className="font-bold mb-2">Tagging Files:</span> File Manager
          allows users to add files to favorites for better organization and
          categorization. Favorite files can be predefined or customizable,
          depending on the needs of the workspace.
          <div className="flex w-full justify-center items-center my-3">
            <Image
              src="/assets/favorites.png"
              alt=""
              height={300}
              width={300}
            />
          </div>
        </div>
        <div>
          <span className="font-bold mb-2">Deleting Files:</span> Users have the
          ability to delete files when they are no longer needed. This can be
          done with options for permanently deleting files or moving them to a
          trash/recycle bin for later recovery.
          <div className="flex w-full justify-center items-center my-3">
            <Image src="/assets/warn.png" alt="" height={300} width={300} />
          </div>
        </div>
        <div>
          <span className="font-bold mb-2">Downloading Files:</span> Users can
          download files from the platform to their local device with a simple
          click or by selecting multiple files for bulk download. Options for
          choosing the file format and quality are provided when downloading
          certain types of files (e.g., images or videos).
          <div className="flex w-full justify-center items-center my-3">
            <Image src="/assets/options.png" alt="" height={100} width={100} />
          </div>
        </div>
        <div>
          <span className="font-bold mb-2">Sharing Files:</span> File Manager
          enables users to easily share files with others within the workspace
          or with specific individuals or groups. Options for setting
          permissions (e.g., view-only or edit) and expiration dates for shared
          links enhance security and control over shared files.
          <div className="flex w-full justify-center items-center my-3">
            <Image src="/assets/share.png" alt="" height={300} width={300} />
          </div>
        </div>
      </div>
      <div className="absolute right-5">
        <Link href="../features/customizable-workspace" className="cursor-pointer p-2 bg-secondary rounded-md" >
          Next ➡️
        </Link>
      </div>
    </div>
  );
}
