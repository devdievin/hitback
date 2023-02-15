import { HttpMethods } from "../enums/HttpMethods";

type DataIntegrityProps = {};

export default function checkDataIntegrity(
  method: HttpMethods,
  bodyRequest: string
) {
  if (method === HttpMethods.POST && bodyRequest === "") {
    return false;
  }

  if (method === HttpMethods.PUT && bodyRequest === "") {
    return false;
  }

  return true;
}
