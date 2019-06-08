import Link from "next/link";

function Navigation() {
  return (
    <header>
      <nav>
        <Link href="/hotels">
          <a>Hotels</a>
        </Link>{" "}
        |{" "}
        <Link href="/reservations">
          <a>Reservations</a>
        </Link>
      </nav>
    </header>
  );
}

export default Navigation;
