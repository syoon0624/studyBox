// 타입 단언(Assertioins)

function getValue(x: string | number, isNumber: boolean) {
  if (isNumber) {
    return Number((x as number).toFixed(2));
  }
  return (x as string).toUpperCase();
}

getValue('hello world', false); // 'hello world'
getValue(3.141592, true); // 3.14
