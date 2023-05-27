const getBoletos = async () => {
  const slackId = document.getElementById("slackAccount").value;
  const centerId = document.getElementById("id-centroDeCustos").value;
  
  const payload = {
    slackId,
    centerId
  };

  axios
    .post("http://localhost:3000/api/v1/postDailyMessage", payload)
    .then( (response) => {
      document.getElementById("slackAccount").value = ''
      document.getElementById("id-centroDeCustos").value = ''
      alert('Sua conta SLACK foi vinculado com o centro de custos com SUCESSO')
    })
    .catch(function (error) {
      console.error(error);
    });
};
