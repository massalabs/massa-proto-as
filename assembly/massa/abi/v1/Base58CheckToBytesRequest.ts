// Code generated by protoc-gen-as. DO NOT EDIT.
// Versions:
//   protoc-gen-as v1.3.0
//   protoc        v4.23.2

import { Writer, Reader, Protobuf } from "as-proto/assembly";

export class Base58CheckToBytesRequest {
  static encode(message: Base58CheckToBytesRequest, writer: Writer): void {
    writer.uint32(10);
    writer.string(message.base58Check);
  }

  static decode(reader: Reader, length: i32): Base58CheckToBytesRequest {
    const end: usize = length < 0 ? reader.end : reader.ptr + length;
    const message = new Base58CheckToBytesRequest();

    while (reader.ptr < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.base58Check = reader.string();
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  }

  base58Check: string;

  constructor(base58Check: string = "") {
    this.base58Check = base58Check;
  }
}

export function encodeBase58CheckToBytesRequest(
  message: Base58CheckToBytesRequest
): Uint8Array {
  return Protobuf.encode(message, Base58CheckToBytesRequest.encode);
}

export function decodeBase58CheckToBytesRequest(
  buffer: Uint8Array
): Base58CheckToBytesRequest {
  return Protobuf.decode<Base58CheckToBytesRequest>(
    buffer,
    Base58CheckToBytesRequest.decode
  );
}