// Code generated by protoc-gen-as. DO NOT EDIT.
// Versions:
//   protoc-gen-as v1.3.0
//   protoc        v3.21.12

import { Writer, Reader, Protobuf } from "as-proto/assembly";

export class LocalExecutionResponse {
  static encode(message: LocalExecutionResponse, writer: Writer): void {
    writer.uint32(10);
    writer.bytes(message.data);
  }

  static decode(reader: Reader, length: i32): LocalExecutionResponse {
    const end: usize = length < 0 ? reader.end : reader.ptr + length;
    const message = new LocalExecutionResponse();

    while (reader.ptr < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.data = reader.bytes();
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  }

  data: Uint8Array;

  constructor(data: Uint8Array = new Uint8Array(0)) {
    this.data = data;
  }
}

export function encodeLocalExecutionResponse(
  message: LocalExecutionResponse
): Uint8Array {
  return Protobuf.encode(message, LocalExecutionResponse.encode);
}

export function decodeLocalExecutionResponse(
  buffer: Uint8Array
): LocalExecutionResponse {
  return Protobuf.decode<LocalExecutionResponse>(
    buffer,
    LocalExecutionResponse.decode
  );
}
