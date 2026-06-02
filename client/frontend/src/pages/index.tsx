import Link from "next/link";
import Layout from "@/components/layout/Layout";
import HomeCarousel from "@/components/HomeCarousel";
import VenueCard from "@/components/VenueCard";
import { venues } from "@/data/venues";

interface User {
  id: number;
  name: string;
  role: "hirer" | "vendor";
}

// Simulated current user (replace with actual authentication logic)
const currentUser: User | null = {
  id: 1,
  name: "Alice",
  role: "hirer",
};

const navItems = currentUser
    ? [
        { label: "Home", href: "/" },
        {
          label: "My Dashboard",
          href: currentUser.role === "hirer" ? "/hirer" : "/vendor",
        },
      ]
    : [
        { label: "Log In", href: "/sign_in" },
        { label: "Sign Up", href: "/sign_up" },
      ];

export default function Home() {
  return (
    <Layout
      headerTitle="Venue Vendors"
      footerText="Student project footer"
      navItems={navItems}
    >
      <div className="space-y-10">
        <HomeCarousel />

        <section>
          <div className="grid gap-6 lg:grid-cols-3">
            {venues.map((venue) => (
              <VenueCard key={venue.id} venue={venue} variant="summary" />
            ))}
          </div>

          <div className="mt-10 flex justify-center">
            <Link
              href="/sign_in"
              className="inline-flex rounded-md px-5 py-2.5 text-sm font-medium text-white transition-colors hover:opacity-90"
              style={{ backgroundColor: "#095d44" }}
            >
              See more
            </Link>
          </div>
        </section>
      </div>
    </Layout>
  );
}
