/* the gift-shop catalogue, shared by the shop grid, the cart, and checkout.
   Product art is brand-drawn SVG (same stand-in language as the cat
   portraits) so thumbnails render anywhere without image files. */
export type ShopItem = {
  id: string;
  name: string;
  price: number;
  blurb: string;
  art: string;
};

const svg = (inner: string) =>
  `<svg viewBox="0 0 200 160" xmlns="http://www.w3.org/2000/svg">${inner}</svg>`;

export const SHOP_ITEMS: ShopItem[] = [
  {
    id: "tee",
    name: "Classic logo tee",
    price: 25,
    blurb: "Soft cotton, tiny paw over the heart.",
    art: svg(
      '<path d="M60 30 L85 20 Q100 32 115 20 L140 30 L155 55 L136 64 L136 135 L64 135 L64 64 L45 55 Z" fill="#F5ECD8" stroke="#301800" stroke-width="5" stroke-linejoin="round"/><circle cx="100" cy="80" r="14" fill="#DC6E00"/>',
    ),
  },
  {
    id: "mug",
    name: "Morning mug",
    price: 18,
    blurb: "For the human the cat allows to share the sofa.",
    art: svg(
      '<rect x="60" y="40" width="70" height="80" rx="12" fill="#DC6E00" stroke="#301800" stroke-width="5"/><path d="M130 55 h14 a16 16 0 0 1 0 40 h-14" fill="none" stroke="#301800" stroke-width="5"/><circle cx="95" cy="80" r="13" fill="#F5ECD8"/>',
    ),
  },
  {
    id: "tote",
    name: "Everyday tote",
    price: 20,
    blurb: "Carries litter, groceries, and the occasional kitten toy.",
    art: svg(
      '<path d="M55 55 L145 55 L138 135 L62 135 Z" fill="#F5ECD8" stroke="#301800" stroke-width="5" stroke-linejoin="round"/><path d="M75 55 Q75 25 100 25 Q125 25 125 55" fill="none" stroke="#301800" stroke-width="5"/><circle cx="100" cy="95" r="14" fill="#DC6E00"/>',
    ),
  },
  {
    id: "stickers",
    name: "Sticker sheet",
    price: 8,
    blurb: "Twelve tiny paws for laptops and water bottles.",
    art: svg(
      '<rect x="45" y="35" width="110" height="90" rx="10" fill="#FFFFFF" stroke="#301800" stroke-width="5"/><circle cx="75" cy="65" r="10" fill="#DC6E00"/><circle cx="105" cy="65" r="10" fill="#301800"/><circle cx="135" cy="65" r="10" fill="#DC6E00"/><circle cx="90" cy="95" r="10" fill="#301800"/><circle cx="120" cy="95" r="10" fill="#DC6E00"/>',
    ),
  },
  {
    id: "beanie",
    name: "Paw beanie",
    price: 22,
    blurb: "Cream knit, embroidered paw. Vancouver-winter approved.",
    art: svg(
      '<path d="M55 110 Q55 45 100 45 Q145 45 145 110 Z" fill="#F5ECD8" stroke="#301800" stroke-width="5"/><rect x="50" y="105" width="100" height="22" rx="10" fill="#DC6E00" stroke="#301800" stroke-width="5"/><circle cx="100" cy="80" r="11" fill="#DC6E00"/>',
    ),
  },
  {
    id: "print",
    name: "Calico art print",
    price: 15,
    blurb: "The brand palette, straight from calico fur. A4.",
    art: svg(
      '<rect x="55" y="30" width="90" height="110" fill="#FFFFFF" stroke="#301800" stroke-width="5"/><rect x="68" y="45" width="28" height="28" rx="8" fill="#DC6E00"/><rect x="104" y="45" width="28" height="28" rx="8" fill="#301800"/><rect x="68" y="81" width="28" height="28" rx="8" fill="#F5ECD8" stroke="#301800" stroke-width="3"/><rect x="104" y="81" width="28" height="28" rx="8" fill="#EEA02C"/>',
    ),
  },
];

export const itemById = (id: string): ShopItem | undefined =>
  SHOP_ITEMS.find((i) => i.id === id);

export const artById: Record<string, string> = Object.fromEntries(
  SHOP_ITEMS.map((i) => [i.id, i.art]),
);
