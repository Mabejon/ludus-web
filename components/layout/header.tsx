"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu } from "lucide-react";

import { cn } from "@/lib/utils";
import { siteConfig } from "@/data/site";
import { mainNav } from "@/data/navigation";
import { services } from "@/data/services";
import { Container } from "@/components/layout/container";
import { Button } from "@/components/ui/button";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

export function Header() {
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-40 border-b border-border/60 bg-background/80 backdrop-blur-md">
      <Container className="flex h-16 items-center justify-between">
        <Link
          href="/"
          className="font-heading text-xl font-semibold tracking-tight text-foreground"
        >
          {siteConfig.shortName}
        </Link>

        <NavigationMenu className="hidden md:flex">
          <NavigationMenuList>
            {mainNav.map((item) => {
              if (item.title === "Servicios") {
                return (
                  <NavigationMenuItem key={item.href}>
                    <NavigationMenuTrigger>{item.title}</NavigationMenuTrigger>
                    <NavigationMenuContent>
                      <ul className="grid w-[340px] gap-0.5 p-2">
                        {services.map((service) => (
                          <li key={service.slug}>
                            <NavigationMenuLink
                              render={<Link href={`/servicios/${service.slug}`} />}
                            >
                              <span className="text-sm font-medium text-foreground">
                                {service.title}
                              </span>
                            </NavigationMenuLink>
                          </li>
                        ))}
                        <li className="mt-1 border-t border-border pt-1">
                          <NavigationMenuLink render={<Link href="/servicios" />}>
                            <span className="text-sm text-muted-foreground">
                              Ver todos los servicios
                            </span>
                          </NavigationMenuLink>
                        </li>
                      </ul>
                    </NavigationMenuContent>
                  </NavigationMenuItem>
                );
              }

              const isActive =
                item.href === "/" ? pathname === "/" : pathname.startsWith(item.href);

              return (
                <NavigationMenuItem key={item.href}>
                  <NavigationMenuLink
                    render={<Link href={item.href} />}
                    className={navigationMenuTriggerStyle()}
                    {...(isActive && { "data-active": true })}
                  >
                    {item.title}
                  </NavigationMenuLink>
                </NavigationMenuItem>
              );
            })}
          </NavigationMenuList>
        </NavigationMenu>

        <div className="hidden md:block">
          <Button render={<Link href="/contacto" />} nativeButton={false}>
            Pide tu primera cita
          </Button>
        </div>

        <Sheet>
          <SheetTrigger
            render={<Button variant="ghost" size="icon" aria-label="Abrir menú" />}
            className="md:hidden"
          >
            <Menu />
          </SheetTrigger>
          <SheetContent side="right" className="w-full sm:max-w-xs">
            <SheetHeader>
              <SheetTitle>{siteConfig.shortName}</SheetTitle>
              <SheetDescription>
                {siteConfig.professional.role} · {siteConfig.location.area}
              </SheetDescription>
            </SheetHeader>
            <nav className="flex flex-col gap-1 px-4">
              {mainNav.map((item) => (
                <SheetClose
                  key={item.href}
                  render={<Link href={item.href} />}
                  nativeButton={false}
                  className={cn(
                    "rounded-lg px-2 py-2 text-sm font-medium text-foreground transition-colors hover:bg-muted",
                    pathname === item.href && "bg-muted"
                  )}
                >
                  {item.title}
                </SheetClose>
              ))}
            </nav>
            <SheetFooter>
              <SheetClose
                render={
                  <Button
                    render={<Link href="/contacto" />}
                    nativeButton={false}
                    className="w-full"
                  />
                }
                nativeButton={false}
              >
                Pide tu primera cita
              </SheetClose>
            </SheetFooter>
          </SheetContent>
        </Sheet>
      </Container>
    </header>
  );
}
