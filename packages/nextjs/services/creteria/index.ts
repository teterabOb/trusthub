export async function getMatchingUsers(criteriaList: string[]) {
  console.log({
    criteriaList,
  });

  return {
    value: "10000",
    score: 10,
    assessment: 10,
    reputation: "gold",
    secret: "this is a top secret",
  };
}
