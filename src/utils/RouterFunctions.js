import { useRouter } from "vue-router";

export function goTo(router, nameRouter) {
  const navigate = () => {
    router.push({ name: nameRouter });
  };
  return navigate;
}
