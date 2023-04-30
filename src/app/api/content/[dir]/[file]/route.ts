import { FileSASPermissions, ShareServiceClient } from '@azure/storage-file-share';
import { NextRequest } from 'next/server';

const connStr = process.env.NEXT_PUBLIC_FILE_SHARE_CONN_STRING as string;

const shareServiceClient = ShareServiceClient.fromConnectionString(connStr);

export async function GET(request: NextRequest, { params }: { params: { dir: string; file: string } }) {
  const { dir, file } = params;
  const directory = shareServiceClient.getShareClient('resid').getDirectoryClient(dir);
  const shareFile = directory.getFileClient(file);
  const expDate = new Date();
  expDate.setDate(expDate.getDate() + 5);
  const url = shareFile.generateSasUrl({
    expiresOn: expDate,
    permissions: FileSASPermissions.parse('r'),
  });
  return new Response(url);
}
