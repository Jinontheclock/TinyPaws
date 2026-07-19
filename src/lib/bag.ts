/* the demo shop's bag, shared across shop → cart → checkout via
   localStorage. No payments anywhere — the bag is the whole story. */
export type BagItem = { id: string; name: string; price: number; qty: number };

const KEY = "tinypaws-bag";

export const loadBag = (): BagItem[] => {
  try {
    return JSON.parse(localStorage.getItem(KEY) ?? "[]");
  } catch {
    return [];
  }
};

export const saveBag = (items: BagItem[]): void => {
  localStorage.setItem(KEY, JSON.stringify(items.filter((i) => i.qty > 0)));
};

export const addToBag = (item: Omit<BagItem, "qty">): void => {
  const bag = loadBag();
  const cur = bag.find((i) => i.id === item.id);
  if (cur) cur.qty += 1;
  else bag.push({ ...item, qty: 1 });
  saveBag(bag);
};

export const clearBag = (): void => saveBag([]);

export const bagCount = (bag = loadBag()): number => bag.reduce((n, i) => n + i.qty, 0);
export const bagTotal = (bag = loadBag()): number => bag.reduce((n, i) => n + i.qty * i.price, 0);
