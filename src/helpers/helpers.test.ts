import {
  desc,
  getSorting,
  stableSort
} from "./helpers";

describe("helpers", () => {
  const a = {
    amount: 1713599,
    block_level: 612370,
    counter: 128143,
    destination: "tz1UihWDQrVcyT4C2x9kj1sgHopw86WtztsD",
    fee: 1420,
    source: "tz1W1nzxwQfe3jpaXakCi5JVZ4i3z1D1tBnB",
    timestamp: 1566986236000
  };

  const b = {
    amount: 2430992,
    block_level: 612370,
    counter: 200818,
    destination: "tz1Ucmx4f9pGeofQuCCY2cHvDKa2ssqT7VEF",
    fee: 1420,
    source: "tz1NtBuXQfXZPiiNAzSGttrcrX9gbKbCXRgz",
    timestamp: 1566986236000
  };

  const arr = [
    {
      amount: 2885531,
      block_level: 612186,
      counter: 82746,
      destination: "tz1Wuua6s88NN3jnbixiKhrywqmM6kjeTLYV",
      fee: 1420,
      source: "tz1Yxhg9zsECapHvgzCQnrGN8P3cLqzNij1C",
      timestamp: 1566980516000
    },
    {
      amount: 1341027,
      block_level: 612187,
      counter: 829022,
      destination: "tz1cDiDK1BVuaGh3KAkETSsXzPHPUKgt8M7d",
      fee: 1420,
      source: "tz1ihxvMmTbns6U4WRTNMkUMhdWsqgFmEyFf",
      timestamp: 1566980546000
    },
    {
      amount: 2776871,
      block_level: 612186,
      counter: 200785,
      destination: "tz1W1nzxwQfe3jpaXakCi5JVZ4i3z1D1tBnB",
      fee: 1420,
      source: "tz1NtBuXQfXZPiiNAzSGttrcrX9gbKbCXRgz",
      timestamp: 1566980516000
    }
  ];

  const result = [
    {
      amount: 1341027,
      block_level: 612187,
      counter: 829022,
      destination: "tz1cDiDK1BVuaGh3KAkETSsXzPHPUKgt8M7d",
      fee: 1420,
      source: "tz1ihxvMmTbns6U4WRTNMkUMhdWsqgFmEyFf",
      timestamp: 1566980546000
    },
    {
      amount: 2776871,
      block_level: 612186,
      counter: 200785,
      destination: "tz1W1nzxwQfe3jpaXakCi5JVZ4i3z1D1tBnB",
      fee: 1420,
      source: "tz1NtBuXQfXZPiiNAzSGttrcrX9gbKbCXRgz",
      timestamp: 1566980516000
    },
    {
      amount: 2885531,
      block_level: 612186,
      counter: 82746,
      destination: "tz1Wuua6s88NN3jnbixiKhrywqmM6kjeTLYV",
      fee: 1420,
      source: "tz1Yxhg9zsECapHvgzCQnrGN8P3cLqzNij1C",
      timestamp: 1566980516000
    }
  ];

  it("stableSort should return proper value", () => {
    expect(stableSort(arr, getSorting("asc", "amount"))).toEqual(result)
  });

  it("desc should return proper value (1)", () => {
    expect(desc(a, b, "amount")).toEqual(1)
  });

  it("desc should return proper value (-1)", () => {
    const newA = {
      ...a,
      amount: 2430992
    };

    const newB = {
      ...b,
      amount: 1713599
    };

    expect(desc(newA, newB, "amount")).toEqual(-1)
  });
});
