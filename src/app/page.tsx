"use client";

import { Phone, MapPin, Clock, Star, Facebook } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Image from "next/image";

export default function HomePage() {
  return (
    <div className="min-h-screen bg-white">
      <style jsx global>{`
        html {
          scroll-behavior: smooth;
        }
      `}</style>
      {/* Header */}
      <header className="bg-white shadow-sm border-b">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <Image
                src="/images/graver-banner.png"
                alt="GRAVER CZ Logo"
                width={300}
                height={80}
                className="h-8 sm:h-10 md:h-12 w-auto object-contain rounded-md"
                priority
              />
            </div>
            <nav className="hidden md:flex space-x-8">
              <a
                href="#pocetna"
                className="text-gray-700 hover:text-green-600 font-medium"
              >
                Početna
              </a>
              <a
                href="#usluge"
                className="text-gray-700 hover:text-green-600 font-medium"
              >
                Usluge
              </a>
              <a
                href="#o-nama"
                className="text-gray-700 hover:text-green-600 font-medium"
              >
                O nama
              </a>
              <a
                href="#kontakt"
                className="text-gray-700 hover:text-green-600 font-medium"
              >
                Kontakt
              </a>
            </nav>
            <Button
              className="bg-green-600 hover:bg-green-700 text-white text-sm md:text-base px-3 md:px-4"
              asChild
            >
              <a href="tel:0642287056">
                <Phone className="w-4 h-4 mr-1 md:mr-2" />
                <span className="hidden sm:inline">Pozovite nas</span>
                <span className="sm:hidden">Pozovi</span>
              </a>
            </Button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section
        id="pocetna"
        className="bg-gradient-to-br from-green-50 to-green-100 py-20"
      >
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="flex items-center justify-center mb-6">
              <div className="flex text-yellow-400">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-6 h-6 fill-current" />
                ))}
              </div>
              <span className="ml-2 text-gray-600 font-medium">
                5.0 (1) • Graver u Novom Sadu
              </span>
            </div>

            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
              Profesionalno
              <span className="text-green-600 block">Graviranje</span>
            </h1>

            <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
              Pružamo vrhunske usluge graviranja sa preko 10 godina iskustva.
              Preciznost, kvalitet i zadovoljstvo klijenata su naš prioritet.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                size="lg"
                className="bg-green-600 hover:bg-green-700 text-white px-8 py-3"
                asChild
              >
                <a href="#usluge">Pogledajte naše usluge</a>
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-green-600 text-green-600 hover:bg-green-50 px-8 py-3 bg-transparent"
                asChild
              >
                <a href="tel:0642287056">
                  <Phone className="w-5 h-5 mr-2" />
                  064 2287056
                </a>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="usluge" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Naše Usluge
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Nudimo specializovane usluge graviranja za različite potrebe i
              materijale
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="hover:shadow-lg transition-shadow border-green-100">
              <CardHeader>
                <CardTitle className="text-green-600">
                  Izrada pehara, medalja, plaketa
                </CardTitle>
                <CardDescription>
                  Proizvodnja i personalizacija nagrađivačkih predmeta
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-gray-600">
                  <li>• Pehari za sportska takmičenja</li>
                  <li>• Medalje za različite prilike</li>
                  <li>• Plakete sa personalizovanim tekstom</li>
                  <li>• Znački sa logotipima</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow border-green-100">
              <CardHeader>
                <CardTitle className="text-green-600">
                  Industrijsko graviranje
                </CardTitle>
                <CardDescription>
                  Profesionalne usluge graviranja za industrijske potrebe
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-gray-600">
                  <li>• Oznake za mašine i opremu</li>
                  <li>• Serijski brojevi</li>
                  <li>• Industrijske tablice</li>
                  <li>• Tehnički natpisi</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow border-green-100">
              <CardHeader>
                <CardTitle className="text-green-600">Natpisne table</CardTitle>
                <CardDescription>
                  Izrada različitih vrsta natpisnih tabla
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-gray-600">
                  <li>• Kućni brojevi</li>
                  <li>• Firminski natpisi</li>
                  <li>• Informacione table</li>
                  <li>• Upozoravajuće tablice</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow border-green-100">
              <CardHeader>
                <CardTitle className="text-green-600">
                  Graviranje čaša
                </CardTitle>
                <CardDescription>
                  Personalizacija čaša za posebne prilike
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-gray-600">
                  <li>• Venčane čaše</li>
                  <li>• Čaše za godišnjice</li>
                  <li>• Korporativni pokloni</li>
                  <li>• Memorijalne čaše</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow border-green-100">
              <CardHeader>
                <CardTitle className="text-green-600">
                  Graviranje u drvetu
                </CardTitle>
                <CardDescription>
                  Umetničko graviranje na drvenim površinama
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-gray-600">
                  <li>• Drvene plakete</li>
                  <li>• Memorijalne table</li>
                  <li>• Dekorativni elementi</li>
                  <li>• Personalizovani pokloni</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow border-green-100">
              <CardHeader>
                <CardTitle className="text-green-600">Ostale usluge</CardTitle>
                <CardDescription>
                  Dodatne specijalizovane usluge graviranja
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-gray-600">
                  <li>• Graviranje za zlatare</li>
                  <li>• Graviranje privezaka</li>
                  <li>• Pločice za ključne ljubimce</li>
                  <li>• Personalizovani dodaci</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="o-nama" className="py-20 bg-green-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-gray-900 mb-4">O nama</h2>
              <p className="text-xl text-gray-600">
                Vaš pouzdan partner za sve vrste graviranja u Novom Sadu
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-6">
                  Zašto izabrati GRAVER CZ?
                </h3>
                <div className="space-y-4">
                  <div className="flex items-start space-x-3">
                    <Badge className="bg-green-600 text-white mt-1">✓</Badge>
                    <div>
                      <h4 className="font-semibold text-gray-900">
                        Iskustvo i stručnost
                      </h4>
                      <p className="text-gray-600">
                        Preko 10 godina iskustva u oblasti graviranja
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <Badge className="bg-green-600 text-white mt-1">✓</Badge>
                    <div>
                      <h4 className="font-semibold text-gray-900">
                        Moderna oprema
                      </h4>
                      <p className="text-gray-600">
                        Najsavremenija tehnologija za precizno graviranje
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <Badge className="bg-green-600 text-white mt-1">✓</Badge>
                    <div>
                      <h4 className="font-semibold text-gray-900">
                        Brza usluga
                      </h4>
                      <p className="text-gray-600">
                        Kratki rokovi izrade i fleksibilno radno vreme
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <Badge className="bg-green-600 text-white mt-1">✓</Badge>
                    <div>
                      <h4 className="font-semibold text-gray-900">
                        Pristupačne cene
                      </h4>
                      <p className="text-gray-600">
                        Konkurentne cene uz vrhunski kvalitet
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-white p-8 rounded-lg shadow-lg">
                <div className="text-center">
                  <div className="flex justify-center mb-4">
                    <div className="flex text-yellow-400">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="w-8 h-8 fill-current" />
                      ))}
                    </div>
                  </div>
                  <h4 className="text-2xl font-bold text-gray-900 mb-2">
                    5.0 ocena
                  </h4>
                  <p className="text-gray-600 mb-6">
                    Zadovoljni klijenti su naša najbolja preporuka
                  </p>

                  <div className="space-y-4 text-left">
                    <div className="border-l-4 border-green-600 pl-4">
                      <p className="text-gray-600 italic">
                        &ldquo;Odličan kvalitet rada i brza usluga. Preporučujem
                        svima!&rdquo;
                      </p>
                      <p className="text-sm text-gray-500 mt-2">- Marko P.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="kontakt" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Kontakt</h2>
            <p className="text-xl text-gray-600">
              Kontaktirajte nas za sve informacije o našim uslugama
            </p>
          </div>

          <div className="max-w-3xl mx-auto">
            <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">
              Informacije o kontaktu
            </h3>

            <div className="grid sm:grid-cols-2 gap-8">
              <div className="flex items-start space-x-4">
                <div className="bg-green-100 p-3 rounded-lg">
                  <MapPin className="w-6 h-6 text-green-600" />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-1">Adresa</h4>
                  <a
                    href="https://www.google.com/maps/search/Milana+Koma+23,+Novi+Sad+21000"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-600 hover:text-green-600 cursor-pointer transition-colors"
                  >
                    Milana Koma 23, Novi Sad 21000
                  </a>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="bg-green-100 p-3 rounded-lg">
                  <Phone className="w-6 h-6 text-green-600" />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-1">Telefon</h4>
                  <a
                    href="tel:0642287056"
                    className="text-gray-600 hover:text-green-600"
                  >
                    064 2287056
                  </a>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="bg-green-100 p-3 rounded-lg">
                  <Clock className="w-6 h-6 text-green-600" />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-1">
                    Radno vreme
                  </h4>
                  <div className="text-gray-600 space-y-1">
                    <p>Ponedeljak - Petak: 9:00 - 17:00</p>
                    <p>Subota: 9:00 - 14:00</p>
                    <p>Nedelja: Zatvoreno</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-12 text-center">
              <h4 className="font-semibold text-gray-900 mb-4">Pratite nas</h4>
              <div className="flex justify-center">
                <Button
                  variant="outline"
                  size="icon"
                  className="border-green-600 text-green-600 hover:bg-green-50 bg-transparent"
                  asChild
                >
                  <a
                    href="https://www.facebook.com/profile.php?id=100091570605417&sk=about"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Facebook className="w-5 h-5" />
                  </a>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <Image
                src="/images/graver-banner.png"
                alt="GRAVER CZ Logo"
                width={200}
                height={53}
                className="h-8 w-auto object-contain rounded-md mb-4"
              />
              <p className="text-gray-400 mb-4">
                Profesionalne usluge graviranja u Novom Sadu. Kvalitet,
                preciznost i zadovoljstvo klijenata.
              </p>
              <div className="flex space-x-4">
                <Button
                  variant="ghost"
                  size="icon"
                  className="text-gray-400 hover:text-white"
                  asChild
                >
                  <a
                    href="https://www.facebook.com/profile.php?id=100091570605417&sk=about"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Facebook className="w-5 h-5" />
                  </a>
                </Button>
              </div>
            </div>

            <div>
              <ul className="space-y-2 text-gray-400">
                <li>
                  <a href="#pocetna" className="hover:text-white">
                    Početna
                  </a>
                </li>
                <li>
                  <a href="#usluge" className="hover:text-white">
                    Usluge
                  </a>
                </li>
                <li>
                  <a href="#o-nama" className="hover:text-white">
                    O nama
                  </a>
                </li>
                <li>
                  <a href="#kontakt" className="hover:text-white">
                    Kontakt
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold mb-4">Kontakt informacije</h4>
              <div className="space-y-2 text-gray-400">
                <a
                  href="https://www.google.com/maps/search/Milana+Koma+23,+Novi+Sad"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center hover:text-white cursor-pointer transition-colors"
                >
                  <MapPin className="w-4 h-4 mr-2" />
                  Milana Koma 23, Novi Sad
                </a>
                <p className="flex items-center">
                  <Phone className="w-4 h-4 mr-2" />
                  <a href="tel:0642287056" className="hover:text-white">
                    064 2287056
                  </a>
                </p>
              </div>
            </div>
          </div>

          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2025 GRAVER CZ. Sva prava zadržana.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
