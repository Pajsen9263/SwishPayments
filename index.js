const fs = require('fs');
const https = require('https');
const axios = require('axios');

//Code config
const charset = "abcdefghijklmnopqrstuvwxyz0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ";
let agent = ;
let client = ;
let data = ;
let len = 16;
let certificate = ;
let key = ;
let ca = ;
let callback = ;
let paymentRefrence = ;
let currency = "SEK";


//Private functions
function getUUID() {
        let text =;
        for (let i = 0; i < len; i++)
                text += charset.charAt(Math.floor(Math.random() * charset.length));
        return text;
}





//Public functions
async function createClient(option) {

        let options = option || {};
        let certificate = options.certficate;
        let key = options.key;
        let ca = options.ca;
        let callback = options.callback;
        let paymentRefrence = options.paymentRefrence;
        let currency = options.currency;


        agent = new https.Agent({
                 cert: fs.readFileSync('./ssl/public.pem', { encoding: 'utf8' }),
                 key: fs.readFileSync('./ssl/private.key', { encoding: 'utf8' }),
                ca: fs.readFileSync('./ssl/Swish_TLS_RootCA.pem', { encoding: 'utf8' }),
        });
        client = axios.create({
                httpsAgent: agent
        });
}

async function createRequestData(option) {
        let options = option || {};
        return "test";
}


async function createPaymentRequest(amount, message) {
  const instructionUUID = createId();
  const data = {
    payeeAlias: '1231111111',
    currency: 'SEK',
    callbackUrl: 'https://your-callback-url.com',
    amount,
    message,
  };
 createRequestData(data)
        .then( 

  try {
    const response = await client.put(
      `https://mss.cpc.getswish.net/swish-cpcapi/api/v2/paymentrequests/${instructionUUID}`,
      data
    );

    if (response.status === 201) {
      const { paymentrequesttoken } = response.headers;
      return { id: instructionUUID, token: paymentrequesttoken };
    }
  } catch (error) {
    console.error(error);
  }
)
}
