export const foo = (arg: string) => {
  console.log("foo");
  return (arg1: string) =>  !Boolean((console.log("bar")))&&(arg+arg1); 
}
