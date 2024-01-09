// function useRedirect() {
//   const deleteRedirect = () => {
//     localStorage.removeItem("redirect");
//   };

//   const setRedirect = (value: string) => {
//     localStorage.setItem("redirect", value);
//   };

//   const getRedirect = (): string | null => {
//     return localStorage.getItem("redirect");
//   };

//   const prepareRedirect = (externalPaths: string[]) => {
//     const currentPath = window.location.pathname;

//     deleteRedirect();

//     if (!externalPaths.includes(currentPath)) {
//       setRedirect(currentPath);
//     }
//   };

//   const triggerRedirect = () => {
//     const redirect = getRedirect();

//     if (redirect) {
//       deleteRedirect();
//       history.push(redirect);
//     }
//   };

//   return [prepareRedirect, triggerRedirect];
// }

export {};
