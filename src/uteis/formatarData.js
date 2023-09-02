export function formatarData(data) {
    const dataObj = new Date(data);
    const dia = padZero(dataObj.getDate());
    const mes = padZero(dataObj.getMonth() + 1);
    const ano = dataObj.getFullYear();
  
    return `${dia}/${mes}/${ano}`;
  }
  
  function padZero(numero) {
    return numero < 10 ? `0${numero}` : numero;
  }
  