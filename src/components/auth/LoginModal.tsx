import { useState } from 'react';
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Button } from '@/components/ui/button';
import { useAuth } from '@/hooks/useAuth';
import { useToast } from '@/hooks/use-toast';

interface LoginModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  onSuccess: () => void;
}

export const LoginModal = ({ open, onOpenChange, onSuccess }: LoginModalProps) => {
  const { signUpWithOtp, verifyOtp } = useAuth();
  const { toast } = useToast();
  const [email, setEmail] = useState('');
  const [nombre, setNombre] = useState('');
  const [telefono, setTelefono] = useState('');
  const [otp, setOtp] = useState('');
  const [step, setStep] = useState<'email' | 'otp'>('email');
  const [loading, setLoading] = useState(false);

  const handleSendOtp = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    const { error } = await signUpWithOtp(email, nombre, '', telefono);

    if (error) {
      toast({
        title: 'Error',
        description: 'No pudimos enviar el código. Intenta de nuevo.',
        variant: 'destructive'
      });
      setLoading(false);
      return;
    }

    toast({
      title: '¡Código enviado!',
      description: 'Revisa tu email para obtener el código de verificación.',
    });
    setStep('otp');
    setLoading(false);
  };

  const handleVerifyOtp = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    const { error } = await verifyOtp(email, otp);

    if (error) {
      toast({
        title: 'Código incorrecto',
        description: 'El código que ingresaste no es válido.',
        variant: 'destructive'
      });
      setLoading(false);
      return;
    }

    toast({
      title: '¡Bienvenida!',
      description: 'Has iniciado sesión correctamente.'
    });
    setLoading(false);
    onSuccess();
    onOpenChange(false);
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle className="text-black">Crea tu cuenta</DialogTitle>
          <DialogDescription>
            Necesitas una cuenta para crear y administrar tu calendario de Meal Prep
          </DialogDescription>
        </DialogHeader>

        {step === 'email' ? (
          <form onSubmit={handleSendOtp} className="space-y-4">
            <div>
              <Label htmlFor="nombre" className="text-black">Nombre completo *</Label>
              <Input
                id="nombre"
                value={nombre}
                onChange={(e) => setNombre(e.target.value)}
                className="mt-2 border-gray-300"
                placeholder="Tu nombre"
                required
              />
            </div>

            <div>
              <Label htmlFor="email" className="text-black">Email *</Label>
              <Input
                id="email"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="mt-2 border-gray-300"
                placeholder="tu@email.com"
                required
              />
            </div>

            <div>
              <Label htmlFor="telefono" className="text-black">Teléfono</Label>
              <Input
                id="telefono"
                type="tel"
                value={telefono}
                onChange={(e) => setTelefono(e.target.value)}
                className="mt-2 border-gray-300"
                placeholder="55 1234 5678"
              />
            </div>

            <Button type="submit" className="w-full" disabled={loading}>
              {loading ? 'Enviando...' : 'Continuar'}
            </Button>
          </form>
        ) : (
          <form onSubmit={handleVerifyOtp} className="space-y-4">
            <div>
              <Label htmlFor="otp" className="text-black">Código de verificación *</Label>
              <Input
                id="otp"
                value={otp}
                onChange={(e) => setOtp(e.target.value)}
                className="mt-2 border-gray-300"
                placeholder="123456"
                required
                maxLength={6}
              />
              <p className="text-sm text-gray-600 mt-2">
                Ingresa el código de 6 dígitos que enviamos a {email}
              </p>
            </div>

            <div className="flex gap-3">
              <Button
                type="button"
                variant="outline"
                className="flex-1"
                onClick={() => setStep('email')}
              >
                Cambiar email
              </Button>
              <Button type="submit" className="flex-1" disabled={loading}>
                {loading ? 'Verificando...' : 'Verificar'}
              </Button>
            </div>
          </form>
        )}
      </DialogContent>
    </Dialog>
  );
};