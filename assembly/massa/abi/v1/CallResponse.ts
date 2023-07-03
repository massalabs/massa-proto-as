// Code generated by protoc-gen-as. DO NOT EDIT.
// Versions:
//   protoc-gen-as v1.3.0
//   protoc        v3.21.12

import { Writer, Reader, Protobuf } from "as-proto/assembly";

export class CallResponse {
  static encode(message: CallResponse, writer: Writer): void {
    writer.uint32(10);
    writer.bytes(message.data);
  }

  static decode(reader: Reader, length: i32): CallResponse {
    const end: usize = length < 0 ? reader.end : reader.ptr + length;
    const message = new CallResponse();

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

export function encodeCallResponse(message: CallResponse): Uint8Array {
  return Protobuf.encode(message, CallResponse.encode);
}

export function decodeCallResponse(buffer: Uint8Array): CallResponse {
  return Protobuf.decode<CallResponse>(buffer, CallResponse.decode);
}
