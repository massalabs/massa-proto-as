// Code generated by protoc-gen-as. DO NOT EDIT.
// Versions:
//   protoc-gen-as v1.3.0
//   protoc        v4.23.2

import { Writer, Reader, Protobuf } from "as-proto/assembly";

export class GetOwnedAddressesResult {
  static encode(message: GetOwnedAddressesResult, writer: Writer): void {
    const addresses = message.addresses;
    if (addresses.length !== 0) {
      for (let i: i32 = 0; i < addresses.length; ++i) {
        writer.uint32(10);
        writer.string(addresses[i]);
      }
    }
  }

  static decode(reader: Reader, length: i32): GetOwnedAddressesResult {
    const end: usize = length < 0 ? reader.end : reader.ptr + length;
    const message = new GetOwnedAddressesResult();

    while (reader.ptr < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.addresses.push(reader.string());
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  }

  addresses: Array<string>;

  constructor(addresses: Array<string> = []) {
    this.addresses = addresses;
  }
}

export function encodeGetOwnedAddressesResult(
  message: GetOwnedAddressesResult
): Uint8Array {
  return Protobuf.encode(message, GetOwnedAddressesResult.encode);
}

export function decodeGetOwnedAddressesResult(
  buffer: Uint8Array
): GetOwnedAddressesResult {
  return Protobuf.decode<GetOwnedAddressesResult>(
    buffer,
    GetOwnedAddressesResult.decode
  );
}
