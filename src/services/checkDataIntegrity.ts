import { HttpMethods } from "../enums/HttpMethods";

type DataIntegrityProps = {};

export default function checkDataIntegrity(
  method: HttpMethods,
  bodyRequest: string
) {
  if (method === HttpMethods.POST) {
    return isJsonString(bodyRequest);
  }

  if (method === HttpMethods.PUT) {
    return isJsonString(bodyRequest);
  }

  return true;
}

const isJsonString = (value: string) => {
  try {
    JSON.parse(value);
  } catch (error) {
    // console.log(error);
    return false;
  }
  return true;
};
