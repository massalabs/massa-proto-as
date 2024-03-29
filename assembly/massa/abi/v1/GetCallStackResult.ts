// Code generated by protoc-gen-as. DO NOT EDIT.
// Versions:
//   protoc-gen-as v1.3.0
//   protoc        v4.23.2

import { Writer, Reader, Protobuf } from "as-proto/assembly";

export class GetCallStackResult {
  static encode(message: GetCallStackResult, writer: Writer): void {
    const calls = message.calls;
    if (calls.length !== 0) {
      for (let i: i32 = 0; i < calls.length; ++i) {
        writer.uint32(10);
        writer.string(calls[i]);
      }
    }
  }

  static decode(reader: Reader, length: i32): GetCallStackResult {
    const end: usize = length < 0 ? reader.end : reader.ptr + length;
    const message = new GetCallStackResult();

    while (reader.ptr < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.calls.push(reader.string());
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  }

  calls: Array<string>;

  constructor(calls: Array<string> = []) {
    this.calls = calls;
  }
}

export function encodeGetCallStackResult(
  message: GetCallStackResult
): Uint8Array {
  return Protobuf.encode(message, GetCallStackResult.encode);
}

export function decodeGetCallStackResult(
  buffer: Uint8Array
): GetCallStackResult {
  return Protobuf.decode<GetCallStackResult>(buffer, GetCallStackResult.decode);
}
