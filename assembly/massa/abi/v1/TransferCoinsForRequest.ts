// Code generated by protoc-gen-as. DO NOT EDIT.
// Versions:
//   protoc-gen-as v1.3.0
//   protoc        v4.22.2

import { Writer, Reader, Protobuf } from "as-proto/assembly";
import { NativeAddress } from "..\\..\\model\\v1\\NativeAddress";
import { NativeAmount } from "..\\..\\model\\v1\\NativeAmount";

export class TransferCoinsForRequest {
  static encode(message: TransferCoinsForRequest, writer: Writer): void {
    const senderAddress = message.senderAddress;
    if (senderAddress !== null) {
      writer.uint32(10);
      writer.fork();
      NativeAddress.encode(senderAddress, writer);
      writer.ldelim();
    }

    const targetAddress = message.targetAddress;
    if (targetAddress !== null) {
      writer.uint32(18);
      writer.fork();
      NativeAddress.encode(targetAddress, writer);
      writer.ldelim();
    }

    const amountToTransfer = message.amountToTransfer;
    if (amountToTransfer !== null) {
      writer.uint32(26);
      writer.fork();
      NativeAmount.encode(amountToTransfer, writer);
      writer.ldelim();
    }
  }

  static decode(reader: Reader, length: i32): TransferCoinsForRequest {
    const end: usize = length < 0 ? reader.end : reader.ptr + length;
    const message = new TransferCoinsForRequest();

    while (reader.ptr < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.senderAddress = NativeAddress.decode(reader, reader.uint32());
          break;

        case 2:
          message.targetAddress = NativeAddress.decode(reader, reader.uint32());
          break;

        case 3:
          message.amountToTransfer = NativeAmount.decode(
            reader,
            reader.uint32()
          );
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  }

  senderAddress: NativeAddress | null;
  targetAddress: NativeAddress | null;
  amountToTransfer: NativeAmount | null;

  constructor(
    senderAddress: NativeAddress | null = null,
    targetAddress: NativeAddress | null = null,
    amountToTransfer: NativeAmount | null = null
  ) {
    this.senderAddress = senderAddress;
    this.targetAddress = targetAddress;
    this.amountToTransfer = amountToTransfer;
  }
}

export function encodeTransferCoinsForRequest(
  message: TransferCoinsForRequest
): Uint8Array {
  return Protobuf.encode(message, TransferCoinsForRequest.encode);
}

export function decodeTransferCoinsForRequest(
  buffer: Uint8Array
): TransferCoinsForRequest {
  return Protobuf.decode<TransferCoinsForRequest>(
    buffer,
    TransferCoinsForRequest.decode
  );
}
