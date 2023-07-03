// Code generated by protoc-gen-as. DO NOT EDIT.
// Versions:
//   protoc-gen-as v1.3.0
//   protoc        v3.21.12

import { Writer, Reader, Protobuf } from "as-proto/assembly";

export class SendAsyncMessageResult {
  static encode(message: SendAsyncMessageResult, writer: Writer): void {}

  static decode(reader: Reader, length: i32): SendAsyncMessageResult {
    const end: usize = length < 0 ? reader.end : reader.ptr + length;
    const message = new SendAsyncMessageResult();

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

export function encodeSendAsyncMessageResult(
  message: SendAsyncMessageResult
): Uint8Array {
  return Protobuf.encode(message, SendAsyncMessageResult.encode);
}

export function decodeSendAsyncMessageResult(
  buffer: Uint8Array
): SendAsyncMessageResult {
  return Protobuf.decode<SendAsyncMessageResult>(
    buffer,
    SendAsyncMessageResult.decode
  );
}
