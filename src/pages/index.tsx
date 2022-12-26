import { SignedIn, SignedOut } from "@nhost/react";
import Notes from "../components/Notes";
import SignIn from "../components/SignIn";

export default function HomePage() {
  return (
    <div>
      <SignedIn>
        <div>
          <Notes />
        </div>
      </SignedIn>
      <SignedOut>
        <SignIn />
      </SignedOut>
    </div>
  );
}
