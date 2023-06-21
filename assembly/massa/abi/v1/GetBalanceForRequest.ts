// Code generated by protoc-gen-as. DO NOT EDIT.
// Versions:
//   protoc-gen-as v1.3.0
//   protoc        v4.23.2

import { Writer, Reader, Protobuf } from "as-proto/assembly";
import { NativeAddress } from "../../model/v1/NativeAddress";

export class GetBalanceForRequest {
  static encode(message: GetBalanceForRequest, writer: Writer): void {
    const address = message.address;
    if (address !== null) {
      writer.uint32(10);
      writer.fork();
      NativeAddress.encode(address, writer);
      writer.ldelim();
    }
  }

  static decode(reader: Reader, length: i32): GetBalanceForRequest {
    const end: usize = length < 0 ? reader.end : reader.ptr + length;
    const message = new GetBalanceForRequest();

    while (reader.ptr < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.address = NativeAddress.decode(reader, reader.uint32());
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  }

  address: NativeAddress | null;

  constructor(address: NativeAddress | null = null) {
    this.address = address;
  }
}

export function encodeGetBalanceForRequest(
  message: GetBalanceForRequest
): Uint8Array {
  return Protobuf.encode(message, GetBalanceForRequest.encode);
}

export function decodeGetBalanceForRequest(
  buffer: Uint8Array
): GetBalanceForRequest {
  return Protobuf.decode<GetBalanceForRequest>(
    buffer,
    GetBalanceForRequest.decode
  );
}
