import { computed, signal } from "@preact/signals";

export const transactions = signal([
  { title: "Obi", type: "-", amount: 3000, uid: 0 },
  { title: "Obi", type: "+", amount: 30000, uid: 1 },
]);

export const totalAmount = computed(() =>
  transactions.value.reduce((p, c) => {
    if (c.type === "+") return p + +c.amount;
    if (c.type === "-") return p - +c.amount;
  }, 0)
);

export const expenses = computed(() => transactions.value.filter((e) => e.type === "-"));

export const incomes = computed(() => transactions.value.filter((e) => e.type === "+"));

export const addTransaction = (title, type, amount = 0) => {
  transactions.value = [
    ...transactions.value,
    {
      uid: transactions.value.length + 1,
      title,
      type,
      amount,
    },
  ];
};

export const removeTransaction = (uid) => {
  transactions.value = transactions.value.filter((t) => t.uid !== uid);
};
