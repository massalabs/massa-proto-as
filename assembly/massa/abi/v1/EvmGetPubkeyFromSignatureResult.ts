// Code generated by protoc-gen-as. DO NOT EDIT.
// Versions:
//   protoc-gen-as v1.3.0
//   protoc        v4.23.2

import { Writer, Reader, Protobuf } from "as-proto/assembly";

export class EvmGetPubkeyFromSignatureResult {
  static encode(
    message: EvmGetPubkeyFromSignatureResult,
    writer: Writer
  ): void {
    writer.uint32(10);
    writer.bytes(message.pubKey);
  }

  static decode(reader: Reader, length: i32): EvmGetPubkeyFromSignatureResult {
    const end: usize = length < 0 ? reader.end : reader.ptr + length;
    const message = new EvmGetPubkeyFromSignatureResult();

    while (reader.ptr < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.pubKey = reader.bytes();
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  }

  pubKey: Uint8Array;

  constructor(pubKey: Uint8Array = new Uint8Array(0)) {
    this.pubKey = pubKey;
  }
}

export function encodeEvmGetPubkeyFromSignatureResult(
  message: EvmGetPubkeyFromSignatureResult
): Uint8Array {
  return Protobuf.encode(message, EvmGetPubkeyFromSignatureResult.encode);
}

export function decodeEvmGetPubkeyFromSignatureResult(
  buffer: Uint8Array
): EvmGetPubkeyFromSignatureResult {
  return Protobuf.decode<EvmGetPubkeyFromSignatureResult>(
    buffer,
    EvmGetPubkeyFromSignatureResult.decode
  );
}
