// Code generated by protoc-gen-as. DO NOT EDIT.
// Versions:
//   protoc-gen-as v1.3.0
//   protoc        v4.23.2

import { Writer, Reader, Protobuf } from "as-proto/assembly";

export class DeleteDataForResult {
  static encode(message: DeleteDataForResult, writer: Writer): void {}

  static decode(reader: Reader, length: i32): DeleteDataForResult {
    const end: usize = length < 0 ? reader.end : reader.ptr + length;
    const message = new DeleteDataForResult();

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

export function encodeDeleteDataForResult(
  message: DeleteDataForResult
): Uint8Array {
  return Protobuf.encode(message, DeleteDataForResult.encode);
}

export function decodeDeleteDataForResult(
  buffer: Uint8Array
): DeleteDataForResult {
  return Protobuf.decode<DeleteDataForResult>(
    buffer,
    DeleteDataForResult.decode
  );
}