// Code generated by protoc-gen-as. DO NOT EDIT.
// Versions:
//   protoc-gen-as v1.3.0
//   protoc        v4.23.2

import { Writer, Reader, Protobuf } from "as-proto/assembly";

export class GetBytecodeResult {
  static encode(message: GetBytecodeResult, writer: Writer): void {
    writer.uint32(10);
    writer.bytes(message.bytecode);
  }

  static decode(reader: Reader, length: i32): GetBytecodeResult {
    const end: usize = length < 0 ? reader.end : reader.ptr + length;
    const message = new GetBytecodeResult();

    while (reader.ptr < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.bytecode = reader.bytes();
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  }

  bytecode: Uint8Array;

  constructor(bytecode: Uint8Array = new Uint8Array(0)) {
    this.bytecode = bytecode;
  }
}

export function encodeGetBytecodeResult(
  message: GetBytecodeResult
): Uint8Array {
  return Protobuf.encode(message, GetBytecodeResult.encode);
}

export function decodeGetBytecodeResult(buffer: Uint8Array): GetBytecodeResult {
  return Protobuf.decode<GetBytecodeResult>(buffer, GetBytecodeResult.decode);
}
