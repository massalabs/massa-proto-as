// Code generated by protoc-gen-as. DO NOT EDIT.
// Versions:
//   protoc-gen-as v1.3.0
//   protoc        v3.21.12

import { Writer, Reader, Protobuf } from "as-proto/assembly";

export class BytesToBase58CheckResult {
  static encode(message: BytesToBase58CheckResult, writer: Writer): void {
    writer.uint32(10);
    writer.string(message.base58Check);
  }

  static decode(reader: Reader, length: i32): BytesToBase58CheckResult {
    const end: usize = length < 0 ? reader.end : reader.ptr + length;
    const message = new BytesToBase58CheckResult();

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

export function encodeBytesToBase58CheckResult(
  message: BytesToBase58CheckResult
): Uint8Array {
  return Protobuf.encode(message, BytesToBase58CheckResult.encode);
}

export function decodeBytesToBase58CheckResult(
  buffer: Uint8Array
): BytesToBase58CheckResult {
  return Protobuf.decode<BytesToBase58CheckResult>(
    buffer,
    BytesToBase58CheckResult.decode
  );
}
