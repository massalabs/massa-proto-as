// Code generated by protoc-gen-as. DO NOT EDIT.
// Versions:
//   protoc-gen-as v1.3.0
//   protoc        v4.23.2

import { Writer, Reader, Protobuf } from "as-proto/assembly";

export class TransferCoinsResult {
  static encode(message: TransferCoinsResult, writer: Writer): void {}

  static decode(reader: Reader, length: i32): TransferCoinsResult {
    const end: usize = length < 0 ? reader.end : reader.ptr + length;
    const message = new TransferCoinsResult();

    while (reader.ptr < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  }

  constructor() {}
}

export function encodeTransferCoinsResult(
  message: TransferCoinsResult
): Uint8Array {
  return Protobuf.encode(message, TransferCoinsResult.encode);
}

export function decodeTransferCoinsResult(
  buffer: Uint8Array
): TransferCoinsResult {
  return Protobuf.decode<TransferCoinsResult>(
    buffer,
    TransferCoinsResult.decode
  );
}
