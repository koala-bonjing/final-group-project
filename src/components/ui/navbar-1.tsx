import { Book, Menu, Sunset, Trees, Zap } from "lucide-react";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { useSelector } from "react-redux";
import type { RootState } from "@/store/store";

interface MenuItem {
  title: string;
  url: string;
  description?: string;
  icon?: React.ReactNode;
  items?: MenuItem[];
}

interface Navbar1Props {
  logo?: {
    url: string;
    src: string;
    alt: string;
    title: string;
  };
  menu?: MenuItem[];
}

const Navbar1 = ({
  logo = {
    url: "/",
    src: "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/logos/shadcnblockscom-icon.svg",
    alt: "logo",
    title: "Conference Expense Planner",
  },
  menu = [
    { title: "Venue", url: "/venue" },
    { title: "Add-ons", url: "/addons" },
    { title: "Meals", url: "/meals" },
  ],
}: Navbar1Props) => {
  function DetailsTable() {
    const venues = useSelector((state: RootState) => state.venueData.venue);
    const addons = useSelector((state: RootState) => state.addonsData.addons);
    const meals = useSelector((state: RootState) => state.mealsData.meals);
    const people = useSelector((state: RootState) => state.mealsData.people);

    // ✅ Include only venues the user actually selected
    const venueRows = venues
      .filter((v) => v.quantity > 0) // only if quantity > 0
      .map((v) => ({
        name: `${v.name} (Capacity:${v.capacity})`,
        unitCost: v.price,
        quantity: v.quantity,
        total: v.price * v.quantity,
      }));

    // ✅ Only include selected add-ons
    const addonRows = addons
      .filter((a) => a.quantity > 0)
      .map((a) => ({
        name: a.name,
        unitCost: a.price,
        quantity: a.quantity,
        total: a.price * a.quantity,
      }));

    // ✅ Only include meals that were selected
    const mealRows = meals
      .filter((m) => m.selected) // make sure the user picked this meal
      .map((m) => ({
        name: m.name,
        unitCost: m.pricePerPerson,
        quantity: `For ${people} people`,
        total: m.pricePerPerson * people,
      }));

    const allRows = [...venueRows, ...addonRows, ...mealRows];
    const total = allRows.reduce((sum, i) => sum + i.total, 0);

    return (
      <div className="text-left mt-4" style={{ fontFamily: "Poppins" }}>
        <h2 className="text-2xl font-semibold mb-4 text-center">
          TOTAL COST : <br />{" "}
          <span className="font-bold ">{total.toLocaleString()}</span>
        </h2>

        {allRows.length > 0 ? (
          <div className="overflow-x-auto">
            <table className="min-w-full border border-gray-300 text-sm">
              <thead className="bg-gray-200">
                <tr>
                  <th className="px-4 py-2 border text-left font-semibold">
                    Name
                  </th>
                  <th className="px-4 py-2 border text-left font-semibold">
                    Unit Cost
                  </th>
                  <th className="px-4 py-2 border text-left font-semibold">
                    Quantity
                  </th>
                  <th className="px-4 py-2 border text-left font-semibold">
                    Total Cost
                  </th>
                </tr>
              </thead>
              <tbody>
                {allRows.map((item, idx) => (
                  <tr key={idx} className="odd:bg-white even:bg-gray-50">
                    <td className="px-4 py-2 border">{item.name}</td>
                    <td className="px-4 py-2 border">
                      ${item.unitCost.toLocaleString()}
                    </td>
                    <td className="px-4 py-2 border">{item.quantity}</td>
                    <td className="px-4 py-2 border">
                      ${item.total.toLocaleString()}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        ) : (
          <p className="text-center text-gray-500 mt-6">
            No selections have been made yet.
          </p>
        )}

        <p className="mt-6 text-center text-gray-500 text-sm">
          Thank you for using our Conference Expense Planner! <br />
          <span className="text-gray-400">
            {new Date().toLocaleDateString("en-US", {
              year: "numeric",
              month: "long",
              day: "numeric",
            })}
          </span>
        </p>
      </div>
    );
  }

  return (
    <section className="py-4 border-b fixed top-0 w-full bg-white z-50 shadow-sm ">
      {/* Remove padding container so the right side can align perfectly */}
      <div className="px-8">
        {/* Desktop Menu */}
        <nav className="hidden lg:flex items-center justify-between w-full">
          {/* Left side: logo + navigation menu */}
          <div className="flex items-center gap-6">
            {/* Logo */}
            <a href={logo.url} className="flex items-center gap-2">
              <img
                src={logo.src}
                className="max-h-8 dark:invert"
                alt={logo.alt}
              />
              <span className="text-lg font-semibold tracking-tighter">
                {logo.title}
              </span>
            </a>

            {/* Navigation Menu */}
            <NavigationMenu>
              <NavigationMenuList>
                {menu.map((item) => renderMenuItem(item))}
              </NavigationMenuList>
            </NavigationMenu>
          </div>

          {/* Right side: Show Details button (stays flush-right) */}
          <Dialog>
            <DialogTrigger asChild>
              <Button className="font-semibold">Show Details</Button>
            </DialogTrigger>

            <DialogContent className="max-w-3xl text-center rounded-2xl p-8">
              <DialogHeader>
                <DialogTitle className="text-2xl font-bold mb-4">
                  Event Cost Summary
                </DialogTitle>
              </DialogHeader>

              <DetailsTable />
            </DialogContent>
          </Dialog>
        </nav>
      </div>
    </section>
  );
};

const renderMenuItem = (item: MenuItem) => {
  if (item.items) {
    return (
      <NavigationMenuItem key={item.title}>
        <NavigationMenuTrigger>{item.title}</NavigationMenuTrigger>
        <NavigationMenuContent className="bg-popover text-popover-foreground">
          {item.items.map((subItem) => (
            <NavigationMenuLink asChild key={subItem.title} className="w-80">
              <SubMenuLink item={subItem} />
            </NavigationMenuLink>
          ))}
        </NavigationMenuContent>
      </NavigationMenuItem>
    );
  }

  return (
    <NavigationMenuItem key={item.title}>
      <NavigationMenuLink
        href={item.url}
        className="bg-background hover:bg-muted hover:text-accent-foreground group inline-flex h-10 w-max items-center justify-center rounded-md px-4 py-2 text-sm font-medium transition-colors"
      >
        {item.title}
      </NavigationMenuLink>
    </NavigationMenuItem>
  );
};

const renderMobileMenuItem = (item: MenuItem) => {
  if (item.items) {
    return (
      <AccordionItem key={item.title} value={item.title} className="border-b-0">
        <AccordionTrigger className="text-md py-0 font-semibold hover:no-underline">
          {item.title}
        </AccordionTrigger>
        <AccordionContent className="mt-2">
          {item.items.map((subItem) => (
            <SubMenuLink key={subItem.title} item={subItem} />
          ))}
        </AccordionContent>
      </AccordionItem>
    );
  }

  return (
    <a key={item.title} href={item.url} className="text-md font-semibold">
      {item.title}
    </a>
  );
};

const SubMenuLink = ({ item }: { item: MenuItem }) => {
  return (
    <a
      className="hover:bg-muted hover:text-accent-foreground flex min-w-80 select-none flex-row gap-4 rounded-md p-3 leading-none no-underline outline-none transition-colors"
      href={item.url}
    >
      <div className="text-foreground">{item.icon}</div>
      <div>
        <div className="text-sm font-semibold">{item.title}</div>
        {item.description && (
          <p className="text-muted-foreground text-sm leading-snug">
            {item.description}
          </p>
        )}
      </div>
    </a>
  );
};

export { Navbar1 };
